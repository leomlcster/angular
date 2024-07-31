export interface Product{ //export para que sea utilizable desde otros puntos del proyecto.
    
    id: number;
    title: string;
    description: string;
    category: string;
    image: string; 
    rating: rating;
}
    
export interface rating{
    rate: number;
    count: number;
    }
