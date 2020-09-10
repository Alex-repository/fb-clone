
import React from 'react';
import "./styles/SidebarRow.css"
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// import ChatIcon from '@material-ui/icons/Chat';
const StyledBadgeOnline = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
// const StyledBadgeChatMsj = withStyles((theme) => ({
//     badge: {
//       backgroundColor: '#f44336',
//       color: '#fafafa',
//       boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//       '&::after': {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         borderRadius: '50%',
//         animation: '$ripple 1.2s infinite ease-in-out',
//         border: '1px solid currentColor',
//         content: '"5"',
//         fontSize: 15,
//       },
//     },
//     '@keyframes ripple': {
//       '0%': {
//         transform: 'scale(.8)',
//         opacity: 1,
//       },
//       '100%': {
//         transform: 'scale(2.4)',
//         opacity: 0,
//       },
//     },
//   }))(Badge);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function SidebarRow({src, Icon, title}) {
    const classes = useStyles();

    return (
        <div className="sidebarRow">

            {src && <div className={classes.root}>
                <StyledBadgeOnline
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="title" src={src} />
                </StyledBadgeOnline>

            </div>}

            {/* { Icon == ChatIcon ? <StyledBadgeChatMsj
                overlap="circle"
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                variant="dot"
            >
            <ChatIcon/>
            </StyledBadgeChatMsj> : null } */}
           {Icon  && <Icon/> }
            <h4>
               {title }
            </h4> 
        </div>
    )
}

export default SidebarRow
