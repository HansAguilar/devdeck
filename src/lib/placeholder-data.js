const user = [{
    id: "1",
    username: "aiah",
    password: "123",
    viewed: [],
    createdAt: new Date().toJSON(),
    updatedAt: new Date().toJSON(),
}];

const card = [{
    id: "1",
    username: "aiahxyah",
    title: "Graphics Designer",
    bio: "Work hard in silence, let your success be your noise.",
    profile: "/aiah.png",
    bg: "Accent",
    theme: "Purple",
    tech_stack: "{'Canva', 'Figma', 'Blender', 'Procreate'}",
    total_likes: 0,
    views: 0,
    created_at: new Date(),
    updated_at: new Date()
}]

module.exports = {
    user,
    card
}