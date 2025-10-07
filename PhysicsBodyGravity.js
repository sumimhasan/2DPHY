function PhysicsBodyGravity(body, strength = 9.81, direction = [0, 1, 0], deltaTime = 1 / 60) {
    // Normalize direction vector
    const mag = Math.hypot(direction[0], direction[1], direction[2] || 0);
    const dir = mag === 0 ? [0, 1, 0] : direction.map(d => d / mag);

    // Apply acceleration = g * direction
    const acceleration = {
        x: dir[0] * strength,
        y: dir[1] * strength,
        z: (dir[2] || 0) * strength
    };

    // Update velocity (v = v + a * t)
    body.velocity = body.velocity || { x: 0, y: 0, z: 0 };
    body.velocity.x += acceleration.x * deltaTime;
    body.velocity.y += acceleration.y * deltaTime;
    body.velocity.z += acceleration.z * deltaTime;

    // Update position (p = p + v * t)
    body.position.x += body.velocity.x * deltaTime;
    body.position.y += body.velocity.y * deltaTime;
    body.position.z += body.velocity.z * deltaTime;
}
export { PhysicsBodyGravity };