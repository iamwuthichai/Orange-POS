export const successResponse = (data: any, message: string = "Success") => {
    return { success: true, message, data };
};

export const errorResponse = (message: string = "Something went wrong") => {
    return { success: false, message };
};
