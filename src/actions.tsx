export const increment = (nr: number) => {
    return {
        type: 'INCREMENT',
        payload: nr
    };
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    };
}

export const switchLayout = (layoutType: string) => {
    return {
        type: layoutType
    };
}
