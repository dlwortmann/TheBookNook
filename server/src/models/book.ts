import { DataTypes,  type Sequelize, Model, type Optional } from 'sequelize';

interface BookAttributes {
    isbn: number;
    title: string;
    author: string;
    publishDate: string;
    pageCount: number;
    genre: string;
    description: string;
    isMovie?: boolean;
    reviews?: string[];
}

interface BookCreationAttributes extends Optional<BookAttributes, 'isbn'> {}

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
    public isbn!: number;
    public title!: string;
    public author!: string;
    public publishDate!: string;
    public pageCount!: number;
    public genre!: string;
    public description!: string;
    public isMovie?: boolean | undefined;
    public reviews!: string[];
}

export function BookFactory(sequelize: Sequelize):
 typeof Book {
    Book.init(
        {
            isbn: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            publishDate: { 
                type: DataTypes.STRING,
                allowNull: false,
            },
            pageCount: { 
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            genre: { 
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: { 
                type: DataTypes.STRING,
                allowNull: false,
            },
            isMovie: { 
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            reviews: { 
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            }
        },
        {
            tableName: 'books',
            sequelize,
        }
    )
    return Book
}