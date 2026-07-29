export const getRegisterDataFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("registerData"));
};
export const setRegisterDataToLocalStorage = (registerData) => {
	localStorage.setItem("registerData", JSON.stringify(registerData));
};
