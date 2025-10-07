function PhysicsBody(element, mass = 1) {
    const rect = element.getBoundingClientRect();

    const body = {
        element: element,     // link to the actual DOM node
        mass: mass,           // physics mass
        position: { 
            x: rect.left + rect.width / 2, 
            y: rect.top + rect.height / 2, 
            z: 0 
        },
        velocity: { x: 0, y: 0, z: 0 },
        acceleration: { x: 0, y: 0, z: 0 },
        width: rect.width,
        height: rect.height,
        isStatic: false,      // for immovable objects (like the ground)
        
    };

    return body;
}