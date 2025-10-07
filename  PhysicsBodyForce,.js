function PhysicsBodyForce(body, force, deltaTime = 1 / 60) {
    // Ensure the body has required properties
    body.mass = body.mass || 1;
    body.velocity = body.velocity || { x: 0, y: 0, z: 0 };
    body.position = body.position || { x: 0, y: 0, z: 0 };

    // F = m * a → a = F / m
    const acceleration = {
        x: force.x / body.mass,
        y: force.y / body.mass,
        z: (force.z || 0) / body.mass
    };

    // Update velocity
    body.velocity.x += acceleration.x * deltaTime;
    body.velocity.y += acceleration.y * deltaTime;
    body.velocity.z += acceleration.z * deltaTime;

    // Update position
    body.position.x += body.velocity.x * deltaTime;
    body.position.y += body.velocity.y * deltaTime;
    body.position.z += body.velocity.z * deltaTime;
}
module.exports = PhysicsBodyForce;