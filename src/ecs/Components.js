const Components = {};
/* =========================================================================
 *
 * Components.js
 *  This contains all components for the tutorial (ideally, components would
 *  each live in their own module)
 *
 *  Components are just data.
 *
 * ========================================================================= */

// Appearance
// --------------------------------------
Components.Appearance = function ComponentAppearance(params) {
  // Appearance specifies data for color and size
  params = params || {};

  this.colors = params.colors;
  if (!this.colors) {
    // generate random color if not passed in (get 6 random hex values)
    this.colors = {
      r: 0,
      g: 100,
      b: 150
    };
  }

  this.size = params.size || 1 + ((Math.random() * 30) | 0);

  return this;
};
Components.Appearance.prototype.name = "appearance";

// Health
// --------------------------------------
Components.Health = function ComponentHealth(value) {
  value = value || 20;
  this.value = value;

  return this;
};
Components.Health.prototype.name = "health";

// Position
// --------------------------------------
Components.Position = function ComponentPosition(params) {
  params = params || {};

  return this;
};
Components.Position.prototype.name = "position";

// playerControlled
// --------------------------------------
Components.PlayerControlled = function ComponentPlayerControlled(params) {
  this.pc = true;
  return this;
};
Components.PlayerControlled.prototype.name = "playerControlled";

// Collision
// --------------------------------------
Components.Collision = function ComponentCollision(params) {
  this.collides = true;
  return this;
};
Components.Collision.prototype.name = "collision";

export default Components;
