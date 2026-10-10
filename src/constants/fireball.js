import { FighterAttackStrength } from './fighter.js';

export const fireballVelocity = {
	[FighterAttackStrength.LIGHT]: 180, // antes 150
	[FighterAttackStrength.MEDIUM]: 250, // antes 220
	[FighterAttackStrength.HEAVY]: 340, // antes 300
};

export const FireballCollisionType = {
	OPPONENT: 'opponent',
	FIREBALL: 'fireball',
};

export const FireballState = {
	ACTIVE: 'active',
	COLLIDED: 'collided',
};
