import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCart from "./carts";

const useGetusers = () => {
    const userContract = useSelector(state => state.addContract.userContract);
    const navigate = useNavigate();
    const { getCarts } = useCart();

    async function getCustomer(password) {
        try {
            const data = await userContract.getCustomer(password);
            window.localStorage.setItem("userData", JSON.stringify({ name: data["name"], email: data["email"], role: data["role"] }));
            toast.success("Login success");
            await getCarts();
            navigate("/");
        } catch (error) {
            if (error.reason === null) {
                toast.error("An Error occured");
            } else {
                toast.error(error.reason);
            }
        }
    }

    async function getFarmer(password) {
        try {
            const data = await userContract.getFarmer(password)
            window.localStorage.setItem("userData", JSON.stringify({ name: data["name"], email: data["email"], role: data["role"] }));
            toast.success("Login success");
            navigate("/farmer");
        } catch (error) {
            if (error.reason === null) {
                toast.error("An Error occured");
            } else {
                toast.error(error.reason);
            }
        }
    }

    async function getAuthority(password) {
        try {
            const data = await userContract.getAuthority(password)
            window.localStorage.setItem("userData", JSON.stringify({ name: data["name"], email: data["email"], role: data["role"] }));
            toast.success("Login success");
            navigate("/authority");
        } catch (error) {
            if (error.reason === null) {
                toast.error("An Error occured");
            } else {
                toast.error(error.reason);
            }
        }
    }

    return [getCustomer, getFarmer, getAuthority];
}


export default useGetusers;