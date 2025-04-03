import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface MovieAttributes {
    title: string;
    director: string;
    actors: string;
    released: string;
    poster: string;
    genre: string;
    plot: string;
}

interface MovieCreationAttributes extends Optional<MovieAttributes, 'title'> { }

export class Movie extends Model<MovieAttributes, MovieCreationAttributes> implements MovieAttributes {
    public title!: string;
    public director!: string;
    public actors!: string;
    public released!: string;
    public poster!: string;
    public genre!: string;
    public plot!: string;
}

export function MovieFactory(sequelize: Sequelize): typeof Movie {
    Movie.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            director: {
                type: DataTypes.STRING,
                allowNull: false,
            }, 
            actors: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            released: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            poster: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            plot: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'movies',
            sequelize,
        }
    )
    return Movie
}

