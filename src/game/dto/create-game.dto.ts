export class CreateGameDto {

    id!: number;
    id_user1!: number;
    id_user2!: number;
    code!: string;
    status!: string;
    winner_id!: number;
    date_created!: Date;
    game_time!: TimeRanges;

}
