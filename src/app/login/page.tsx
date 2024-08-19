"use client";

import Button from "@/components/atom/Button";
import Input from "@/components/atom/Input";
import { Typography, Box, Divider } from "@mui/material";
import Image from "next/image";
import { useForm } from "react-hook-form";

interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = (props) => {
  const { control } = useForm();
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "24px",
          width: "500px",
          alignItems: "center",
          padding: "36px 36px",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "600" }} variant="h4">
            Sign in
          </Typography>
          <Typography
            sx={{ marginTop: "16px", fontSize: "14px", color: "GrayText" }}
          >
            Welcome to Market Floor, a market places connects retailer and
            customers
          </Typography>
        </Box>

        <Button variant="outlined">
          <span>Sign in with Google </span>
          <Image
            alt="google-logo"
            src={require("../../assets/icons/google.png")}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
        </Button>

        <form className="w-full flex gap-y-6 flex-col">
          <Input
            name="phoneNumber"
            label="Số điện thoại"
            placeholder="Nhập số điện thoại của bạn"
          />
          <Input
            name="password"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            mode="password"
          />
          <Button variant="contained" sx={{ mt: 2 }}>
            Continue with phone number
          </Button>
        </form>

        <Box>
          <Typography sx={{ fontSize: "14px", color: "GrayText" }}>
            By sign in, you agree to Dakoli's Terms of Service and Privacy
            Policy, as well as the Cookie Policy
          </Typography>
        </Box>
        <Divider sx={{ height: 4, width: "100%" }} />

        <Box>
          <Typography
            sx={{ fontSize: "14px", color: "GrayText", textAlign: "center" }}
          >
            Dont have an account? Sign up
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
