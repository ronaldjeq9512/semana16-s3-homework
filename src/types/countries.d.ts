export interface SoccerCaptain {
    name: string;
    position: string;
    age: number
}


export interface Coach {
    name: string;
    age: number
}

export interface Country {
    name: string;
    image: string;
    soccerCaptain: SoccerCaptain;
    coach: Coach;
}
