/* =========================================================================
 *
 * render.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */
function clearBoard() {}

// ECS - System - Render
// --------------------------------------
const render = function systemRender(entities) {
  // Here, we've implemented systems as functions which take in an array of
  // entities. An optimization would be to have some layer which only
  // feeds in relevant entities to the system, but for demo purposes we'll
  // assume all entities are passed in and iterate over them.

  // This happens each tick, so we need to clear out the previous rendered
  // state

  let curEntity;

  // iterate over all entities
  for (let entityId in entities) {
    curEntity = entities[entityId];

    // Only run logic if entity has relevant components
    if (
      curEntity.components.position &&
      curEntity.components.playerControlled
    ) {
    }
  }
};

export default render;
