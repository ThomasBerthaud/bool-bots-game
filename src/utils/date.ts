// TODO use date-fns
export const formatTime = (seconds: number) => {
    console.log(seconds);
    return Math.round(seconds / 100) + " secondes";
};
