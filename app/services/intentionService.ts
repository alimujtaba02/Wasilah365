import { Intention } from '../types/intention';

export function createIntention(    
    title: string,
    description: string,
    category?: string 
): Intention {
    return{
        id: crypto.randomUUID(),
        title,
        description,
        completed: false,
        date: new Date().toISOString().split('T')[0],
        category,
    };
}
