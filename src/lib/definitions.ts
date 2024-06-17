export type User = {
    id: string;
    username: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    user_card?: Card;
    cardId?: string;
    viewed: string[]
};

export type Card = {
    id: string;
    username: string;
    title: string;
    bio: string;
    profile: string;
    bg: string;
    theme: string;
    tech_stack: string[];
    total_likes: 0
    views: 0;
    User: User;
};