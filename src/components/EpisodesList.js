import React, { useEffect, useState } from "react";

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="episodes-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
