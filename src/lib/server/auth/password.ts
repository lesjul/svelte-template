import argon2 from "argon2";

export const argon2Hash = argon2.hash;

export const argon2Verify = async (data: { hash: string; password: string }): Promise<boolean> => {
	const { hash, password } = data;
	return argon2.verify(hash, password);
};
