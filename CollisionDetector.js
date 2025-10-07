// CollisionDetector.js
// detect collisions between physics bodies
// Functions as objects with position and width/height
// main collision detection function 

// ==============================================
function CollisionDetector(physicsBodies) {
    const collisions = [];
    const bodiesCount = physicsBodies.length;

    for (let i = 0; i < bodiesCount; i++) {

        for (let j = i + 1; j < bodiesCount; j++) {
            const bodyA = physicsBodies[i];
            const bodyB = physicsBodies[j];

            if (CheckCollision(bodyA, bodyB)) {
                collisions.push({ bodyA, bodyB });
            }
        }
    }

    return collisions;
}

// collision detection
function CheckCollision(bodyA, bodyB) {
    return !(
        bodyA.position.x + bodyA.WidthX < bodyB.position.x ||
        bodyA.position.x > bodyB.position.x + bodyB.WidthX ||
        bodyA.position.y + bodyA.WidthY < bodyB.position.y ||
        bodyA.position.y > bodyB.position.y + bodyB.WidthY
    );
}

// get center position + width/height from DOM element
function GetWidthPosition(element) {
    const rect = element.getBoundingClientRect();

    const xCenter = rect.left + rect.width / 2;
    const yCenter = rect.top + rect.height / 2;

    return {
        position: { x: xCenter, y: yCenter },
        WidthX: rect.width,
        WidthY: rect.height
    };
}
export { CollisionDetector, GetWidthPosition };