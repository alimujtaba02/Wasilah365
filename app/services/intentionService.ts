import AsyncStorage from '@react-native-async-storage/async-storage';
import { Intention } from '../types/intention';

const INTENTION_STORAGE_KEY= 'TODAY_INTENTION';

async function loadStoredIntention(): Promise<Intention | null> {
    const raw = await AsyncStorage.getItem(INTENTION_STORAGE_KEY);
    if (!raw){
        return null;
    }
    return JSON.parse (raw) as Intention;    
}

function getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
}

function createTodayIntention(    
    title: string,
    description: string,
    category?: string 
): Intention {
    return{
        id: Date.now().toString(),
        title,
        description,
        completed: false,
        date: getTodayDate(),
        category,
    };
}

