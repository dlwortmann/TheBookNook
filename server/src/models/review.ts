import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface ReviewAttributes {
    review_id: number;
    content: string;
    author: string;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, 'review_id'> { }

export class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
    public review_id!: number;
    public content!: string;
    public author!: string;
}

export function ReviewFactory(sequelize: Sequelize): typeof Review {
    Review.init(
        {
            review_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'reviews',
            sequelize,
        }
    )
    return Review
}

interface ReviewResponseAttributes {
    response_id: number;
    content: string;
    author: string;
}

interface ReviewResponseCreationAttributes extends Optional<ReviewResponseAttributes, 'response_id'> { }

export class ReviewResponse extends Model<ReviewResponseAttributes, ReviewResponseCreationAttributes> implements ReviewResponseAttributes {
    public response_id!: number;
    public content!: string;
    public author!: string;
}

export function ReviewResponseFactory(sequelize: Sequelize): typeof ReviewResponse {
    ReviewResponse.init(
        {
            response_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'reviewresponse',
            sequelize,
        }
    )
    return ReviewResponse
}