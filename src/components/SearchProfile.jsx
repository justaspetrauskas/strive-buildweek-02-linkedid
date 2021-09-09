import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";

const SearchProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [query, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const fetchProfiles = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1YzBiODdiZTZjMTAwMTVmOWRiOTAiLCJpYXQiOjE2MzA5MTI3NDIsImV4cCI6MTYzMjEyMjM0Mn0.byBIo7uNfJRP4-fpOCvFNWie1JMeMuhYXLce9wJEiIc",
          },
        }
      );
      if (response.ok) {
        let profilesData = await response.json();
        setProfiles(profilesData);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onSuggestionHandler = (e, query) => {
    console.log(e);
    // should link to another profile
    setSearchQuery(query);
    setSuggestions([]);
  };

  const onChangeHandler = (query, target) => {
    setOpen(true);
    let matches = [];
    if (query.length > 0) {
      matches = profiles.filter((profile) => {
        const regex = new RegExp(`${query}`, "gi");
        return profile.name.match(regex) || profile.surname.match(regex);
      });
    }
    console.log(matches);
    setSuggestions(matches);
    setSearchQuery(query);
  };

  // const handleClickOutside(event){
  //   if
  // }

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="navigation-search">
      <div className="d-none d-md-block">
        <input
          type="text"
          className="navigation-search-input"
          style={{
            width: isOpen ? "400px" : "200px",
            transition: "width 200ms ease-in",
          }}
          placeholder="Search"
          value={query}
          onChange={(e) => onChangeHandler(e.target.value, e.target)}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
              setOpen(false);
            }, 100);
          }}
        />
        {suggestions.length > 0 && (
          <>
            <div className="suggestion-modal-overlay"></div>
            <div className="suggestion-modal-wrapper">
              {suggestions.slice(0, 10).map((suggestion, i) => (
                <div
                  className="suggestion-modal-result"
                  key={i}
                  onClick={(e) =>
                    onSuggestionHandler(
                      e,
                      suggestion.name + " " + suggestion.surname
                    )
                  }
                >
                  <div className="suggestion-modal-result-image">
                    <img src={suggestion.image} alt="" />
                  </div>
                  <div className="suggestion-modal-result-info">
                    <h3>
                      {suggestion.name} {suggestion.surname}
                    </h3>
                    <p>{suggestion.bio}</p>
                  </div>
                </div>
              ))}
              <button className="suggestion-modal-search-all">
                See All Results
              </button>
            </div>
          </>
        )}
        <div className="search-icon">
          <BsSearch size={"16"} />
        </div>
      </div>
      <button className="d-block d-md-none search-btn">
        <div className="search-icon">
          <BsSearch size={"16"} />
        </div>
      </button>
    </div>
  );
};
export default SearchProfile;
