import mongoose from 'mongoose';

const statsSchema = new mongoose.Schema({
    durability: {
        type: Number,
        required: true,
    },
    mining_level: {
        type: Number,
        required: true,
    },
    mining_speed: {
        type: Number,
        required: true,
    },
    attack_damage: {
        type: Number,
        required: true,
    },
});

const materialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    modifiers: {
        type: Number,
        required: true,
    },
    stats: [statsSchema],
    traits: {
        type: String,
    },
});

export default materialSchema;
