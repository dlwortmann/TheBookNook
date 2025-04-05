import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface ReviewAttributes {
    id: number;
    content: string;
    author: string;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, 'id'> { }

export class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
    public id!: number;
    public content!: string;
    public author!: string;
}

export function ReviewFactory(sequelize: Sequelize): typeof Review {
    Review.init(
        {
            id: {
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
    reviewId: number;
    content: string;
    author: string;
}

interface ReviewResponseCreationAttributes extends Optional<ReviewResponseAttributes, 'reviewId'> { }

export class ReviewResponse extends Model<ReviewResponseAttributes, ReviewResponseCreationAttributes> implements ReviewResponseAttributes {
    public reviewId!: number;
    public content!: string;
    public author!: string;
}

export function ReviewResponseFactory(sequelize: Sequelize): typeof ReviewResponse {
    ReviewResponse.init(
        {
            reviewId: {
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