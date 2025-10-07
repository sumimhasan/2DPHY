function PositionChange(body, newPosition   = { x: 0, y: 0, z: 0 }) {  
body.position = body.position || { x: 0, y: 0, z: 0 };
body.position.x = newPosition.x;
body.position.y = newPosition.y;
body.position.z = newPosition.z;
}