type GetEnvVariables = (key: string) => string

export const getEnvVar: GetEnvVariables = (key)=>  {
    const value = process.env.REACT_APP_API_KEY;
    console.log(value, "value", key, "key")
    if (!value) {
        throw new Error(`Missing required env var: ${key}`);
    }
    return value;
}
