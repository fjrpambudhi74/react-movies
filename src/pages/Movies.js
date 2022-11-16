import React from 'react'

export default function Movies() {
  return (
    <div className="container-fluid mt-3">
      <h1>Movies</h1>
      <div class="form-group has-search d-flex justify-content-center">
        <span class="form-control-feedback">
          <i class="bi bi-search search-icon"></i>
        </span>
        <input
          type="text"
          class="form-control bg-transparent w-50 search-text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
