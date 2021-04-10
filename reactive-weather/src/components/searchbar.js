function searchbar() {
  return (
    <div className="search-container">
      <input
        type="search"
        className="form-control"
        placeholder="Search Location"
        id="user-location"
        value="{{location.city}}"
      />
      <label id="search-validation" style="display: none; color: red;"></label>

      <div className="input-group-btn">
        <button
          type="button"
          className="btn btn-outline-secondary"
          id="search-button"
          onclick="showWeatherForSelectedLocation()"
        >
          <label id="search-label" style="align-content: center;">
            Search
          </label>
          <span
            id="search-spinner"
            style="display: none; align-content: center;"
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
}
