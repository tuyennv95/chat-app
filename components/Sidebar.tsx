import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat'
import MoreVerticalIcon from '@mui/icons-material/MoreVert'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'
import IconButton  from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const StyledContainer = styled.div`
    height: 100vh;
    min-width: 300px;
    max-width:350px;
    overflow-y: scroll;
    border-right:1px solid whitesmoke;
`;
const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    height: 60px;
    padding:15px;
    background-color: white;
    border-bottom:1px solid gray;
    position: sticky;
    top: 0;
    z-index: 1;

`;
const StyledSearch = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius:5px;
`;
const StyledSearchInput = styled.input`
    outline: none;
    border:none;
    flex:1;
`;
const StyledSidebarButton = styled(Button)`
    width: 100%;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
`;
const StyledUserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const Sidebar = () => {
  const logout = async () =>{
    try {
      await signOut(auth)
    } catch (error) {
      console.log("Loi", error)
    }
  }
  return (
    <StyledContainer>
      <StyledHeader>
        <Tooltip title="User email" placement="right">
          <StyledUserAvatar />
        </Tooltip>
        <div>
            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <MoreVerticalIcon/>
            </IconButton>
            <IconButton onClick={logout}>
                <LogoutIcon/>
            </IconButton>
        </div>
      </StyledHeader>
      <StyledSearch>
        <SearchIcon/>
        <StyledSearchInput placeholder="Search..."/>
      </StyledSearch>
      <StyledSidebarButton>
        Enter a new convertision
      </StyledSidebarButton>
    </StyledContainer>
  );
};

export default Sidebar;
