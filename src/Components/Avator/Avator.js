import { Stack, Avatar, AvatarGroup } from "@mui/material";


export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>AK</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>PL</Avatar>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPw46szWHhZoURJz8zqA9ktZwCg6IBxRQaQ&usqp=CAU" />
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof5uNTda57O7sc5t9jRm5TgsX5ACj88sR5g&usqp=CAU"
            alt="ajith"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};
