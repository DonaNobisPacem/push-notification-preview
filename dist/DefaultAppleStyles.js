"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var DefaultAppleStyles = {
  root: {
    fontFamily: "Roboto",
    minWidth: "325px"
  },
  cardNotification: {
    backgroundColor: "transparent",
    backdropFilter: 'blur(10px)',
    borderRadius: "15px",
    padding: "16px",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.1px",
    textAlign: "left",
    display: "block",
    fontWeight: 400,
    margin: "0px",
    color: 'white'
  },
  header: {
    display: "flex"
  },
  appIcon: {
    width: "18px",
    height: "18px",
    color: "black"
  },
  appNameText: {
    fontSize: "14px",
    textTransform: "uppercase"
  },
  controlIcon: {
    width: "15px",
    height: "15px"
  },
  notificationText: {
    width: '100%'
  },
  notificationTextWithImage: {
    width: 'calc( 100% - 70px )'
  },
  notificationTitlePreview: {
    fontWeight: 600,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "2px"
  },
  notificationTitle: {
    fontSize: "18px",
    fontWeight: 700,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: "5px"
  },
  notificationMessagePreview: {
    lineHeight: "20px",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical"
  },
  notificationMessage: {
    lineHeight: "20px",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 6,
    "-webkit-box-orient": "vertical"
  },
  cardNotificationWithImage: {
    // backgroundColor: "white",
    backdropFilter: 'blur(10px)',
    borderRadius: "15px 15px 0px 0px",
    padding: "16px",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.1px",
    textAlign: "left",
    display: "block",
    fontWeight: 400,
    margin: "0px",
    color: "#555555"
  },
  notificationActions: {
    listStyleType: "none",
    margin: "6px 0px",
    paddingInlineStart: "0px",
    "& li": {
      padding: "15px",
      marginBottom: "1px",
      backgroundColor: "white"
    },
    "& li:first-child": {
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"
    },
    "& li:last-child": {
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px"
    }
  },
  notificationActionsButton: {
    padding: "0px",
    textTransform: "capitalize",
    fontWeight: 500,
    fontSize: "16px",
    color: "black"
  },
  notificationImagePreviewContainer: {
    textAlign: "right"
  },
  notificationImagePreview: {
    "float": "right",
    height: "60px",
    width: "60px",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "10px"
  },
  notificationImage: {
    width: "100%",
    height: "250px",
    borderRadius: "0px 0px 20px 20px",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  closeIcon: {
    height: "35px",
    width: "35px",
    backgroundColor: "white",
    margin: "5px 15px"
  },
  moreIcon: {
    color: "gray"
  },
  clickableNotification: {
    padding: "0px",
    textTransform: "unset",
    width: "100%"
  }
};
var _default = DefaultAppleStyles;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EZWZhdWx0QXBwbGVTdHlsZXMuanMiXSwibmFtZXMiOlsiRGVmYXVsdEFwcGxlU3R5bGVzIiwicm9vdCIsImZvbnRGYW1pbHkiLCJtaW5XaWR0aCIsImNhcmROb3RpZmljYXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZHJvcEZpbHRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZvbnRXZWlnaHQiLCJtYXJnaW4iLCJjb2xvciIsImhlYWRlciIsImFwcEljb24iLCJ3aWR0aCIsImhlaWdodCIsImFwcE5hbWVUZXh0IiwidGV4dFRyYW5zZm9ybSIsImNvbnRyb2xJY29uIiwibm90aWZpY2F0aW9uVGV4dCIsIm5vdGlmaWNhdGlvblRleHRXaXRoSW1hZ2UiLCJub3RpZmljYXRpb25UaXRsZVByZXZpZXciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJtYXJnaW5Ub3AiLCJub3RpZmljYXRpb25UaXRsZSIsIm1hcmdpbkJvdHRvbSIsIm5vdGlmaWNhdGlvbk1lc3NhZ2VQcmV2aWV3Iiwibm90aWZpY2F0aW9uTWVzc2FnZSIsImNhcmROb3RpZmljYXRpb25XaXRoSW1hZ2UiLCJub3RpZmljYXRpb25BY3Rpb25zIiwibGlzdFN0eWxlVHlwZSIsInBhZGRpbmdJbmxpbmVTdGFydCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsIm5vdGlmaWNhdGlvbkFjdGlvbnNCdXR0b24iLCJub3RpZmljYXRpb25JbWFnZVByZXZpZXdDb250YWluZXIiLCJub3RpZmljYXRpb25JbWFnZVByZXZpZXciLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJub3RpZmljYXRpb25JbWFnZSIsImNsb3NlSWNvbiIsIm1vcmVJY29uIiwiY2xpY2thYmxlTm90aWZpY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxrQkFBa0IsR0FBRztBQUN6QkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLFVBQVUsRUFBRSxRQURSO0FBRUpDLElBQUFBLFFBQVEsRUFBRTtBQUZOLEdBRG1CO0FBS3pCQyxFQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQkMsSUFBQUEsZUFBZSxFQUFFLGFBREQ7QUFFaEJDLElBQUFBLGNBQWMsRUFBRSxZQUZBO0FBR2hCQyxJQUFBQSxZQUFZLEVBQUUsTUFIRTtBQUloQkMsSUFBQUEsT0FBTyxFQUFFLE1BSk87QUFLaEJDLElBQUFBLFFBQVEsRUFBRSxNQUxNO0FBTWhCQyxJQUFBQSxVQUFVLEVBQUUsTUFOSTtBQU9oQkMsSUFBQUEsYUFBYSxFQUFFLE9BUEM7QUFRaEJDLElBQUFBLFNBQVMsRUFBRSxNQVJLO0FBU2hCQyxJQUFBQSxPQUFPLEVBQUUsT0FUTztBQVVoQkMsSUFBQUEsVUFBVSxFQUFFLEdBVkk7QUFXaEJDLElBQUFBLE1BQU0sRUFBRSxLQVhRO0FBWWhCQyxJQUFBQSxLQUFLLEVBQUU7QUFaUyxHQUxPO0FBbUJ6QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05KLElBQUFBLE9BQU8sRUFBRTtBQURILEdBbkJpQjtBQXNCekJLLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLEVBQUUsTUFEQTtBQUVQQyxJQUFBQSxNQUFNLEVBQUUsTUFGRDtBQUdQSixJQUFBQSxLQUFLLEVBQUU7QUFIQSxHQXRCZ0I7QUEyQnpCSyxFQUFBQSxXQUFXLEVBQUU7QUFDWFosSUFBQUEsUUFBUSxFQUFFLE1BREM7QUFFWGEsSUFBQUEsYUFBYSxFQUFFO0FBRkosR0EzQlk7QUErQnpCQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEosSUFBQUEsS0FBSyxFQUFFLE1BREk7QUFFWEMsSUFBQUEsTUFBTSxFQUFFO0FBRkcs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c0IsR0E5R1Y7QUFpSHpCaUMsRUFBQUEsd0JBQXdCLEVBQUU7QUFDeEIsYUFBTyxPQURpQjtBQUV4QnpCLElBQUFBLE1BQU0sRUFBRSxNQUZnQjtBQUd4QkQsSUFBQUEsS0FBSyxFQUFFLE1BSGlCO0FBSXhCMkIsSUFBQUEsa0JBQWtCLEVBQUUsZUFKSTtBQUt4QkMsSUFBQUEsY0FBYyxFQUFFLE9BTFE7QUFNeEJDLElBQUFBLGdCQUFnQixFQUFFLFdBTk07QUFPeEJsQixJQUFBQSxTQUFTLEVBQUU7QUFQYSxHQWpIRDtBQTBIekJtQixFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQjlCLElBQUFBLEtBQUssRUFBRSxNQURVO0FBRWpCQyxJQUFBQSxNQUFNLEVBQUUsT0FGUztBQUdqQmIsSUFBQUEsWUFBWSxFQUFFLG1CQUhHO0FBSWpCdUMsSUFBQUEsa0JBQWtCLEVBQUUsZUFKSDtBQUtqQkMsSUFBQUEsY0FBYyxFQUFFLE9BTEM7QUFNakJDLElBQUFBLGdCQUFnQixFQUFFO0FBTkQsR0ExSE07QUFrSXpCRSxFQUFBQSxTQUFTLEVBQUU7QUFDVDlCLElBQUFBLE1BQU0sRUFBRSxNQURDO0FBRVRELElBQUFBLEtBQUssRUFBRSxNQUZFO0FBR1RkLElBQUFBLGVBQWUsRUFBRSxPQUhSO0FBSVRVLElBQUFBLE1BQU0sRUFBRTtBQUpDLEdBbEljO0FBd0l6Qm9DLEVBQUFBLFFBQVEsRUFBRTtBQUNSbkMsSUFBQUEsS0FBSyxFQUFFO0FBREMsR0F4SWU7QUEySXpCb0MsRUFBQUEscUJBQXFCLEVBQUU7QUFDckI1QyxJQUFBQSxPQUFPLEVBQUUsS0FEWTtBQUVyQmMsSUFBQUEsYUFBYSxFQUFFLE9BRk07QUFHckJILElBQUFBLEtBQUssRUFBRTtBQUhjO0FBM0lFLENBQTNCO2VBaUplbkIsa0IiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEZWZhdWx0QXBwbGVTdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiLFxuICAgIG1pbldpZHRoOiBcIjMyNXB4XCJcbiAgfSxcbiAgY2FyZE5vdGlmaWNhdGlvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KScsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICBwYWRkaW5nOiBcIjE2cHhcIixcbiAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgbGluZUhlaWdodDogXCIyNHB4XCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCIwLjFweFwiLFxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBtYXJnaW46IFwiMHB4XCIsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiXG4gIH0sXG4gIGFwcEljb246IHtcbiAgICB3aWR0aDogXCIxOHB4XCIsXG4gICAgaGVpZ2h0OiBcIjE4cHhcIixcbiAgICBjb2xvcjogXCJibGFja1wiXG4gIH0sXG4gIGFwcE5hbWVUZXh0OiB7XG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJcbiAgfSxcbiAgY29udHJvbEljb246IHtcbiAgICB3aWR0aDogXCIxNXB4XCIsXG4gICAgaGVpZ2h0OiBcIjE1cHhcIlxuICB9LFxuICBub3RpZmljYXRpb25UZXh0OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uVGV4dFdpdGhJbWFnZToge1xuICAgIHdpZHRoOiAnY2FsYyggMTAwJSAtIDcwcHggKSdcbiAgfSxcbiAgbm90aWZpY2F0aW9uVGl0bGVQcmV2aWV3OiB7XG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgbWFyZ2luVG9wOiBcIjJweFwiXG4gIH0sXG4gIG5vdGlmaWNhdGlvblRpdGxlOiB7XG4gICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjVweFwiXG4gIH0sXG4gIG5vdGlmaWNhdGlvbk1lc3NhZ2VQcmV2aWV3OiB7XG4gICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgZGlzcGxheTogXCItd2Via2l0LWJveFwiLFxuICAgIFwiLXdlYmtpdC1saW5lLWNsYW1wXCI6IDQsXG4gICAgXCItd2Via2l0LWJveC1vcmllbnRcIjogXCJ2ZXJ0aWNhbFwiXG4gIH0sXG4gIG5vdGlmaWNhdGlvbk1lc3NhZ2U6IHtcbiAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBkaXNwbGF5OiBcIi13ZWJraXQtYm94XCIsXG4gICAgXCItd2Via2l0LWxpbmUtY2xhbXBcIjogNixcbiAgICBcIi13ZWJraXQtYm94LW9yaWVudFwiOiBcInZlcnRpY2FsXCJcbiAgfSxcbiAgY2FyZE5vdGlmaWNhdGlvbldpdGhJbWFnZToge1xuICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KScsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjE1cHggMTVweCAwcHggMHB4XCIsXG4gICAgcGFkZGluZzogXCIxNnB4XCIsXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMjRweFwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbWFyZ2luOiBcIjBweFwiLFxuICAgIGNvbG9yOiBcIiM1NTU1NTVcIixcbiAgfSxcbiAgbm90aWZpY2F0aW9uQWN0aW9uczoge1xuICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICAgIG1hcmdpbjogXCI2cHggMHB4XCIsXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0OiBcIjBweFwiLFxuICAgIFwiJiBsaVwiOiB7XG4gICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxcHhcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiXG4gICAgfSxcbiAgICBcIiYgbGk6Zmlyc3QtY2hpbGRcIjoge1xuICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCIxNXB4XCIsXG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCIxNXB4XCJcbiAgICB9LFxuICAgIFwiJiBsaTpsYXN0LWNoaWxkXCI6IHtcbiAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFwiMTVweFwiLFxuICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFwiMTVweFwiXG4gICAgfVxuICB9LFxuICBub3RpZmljYXRpb25BY3Rpb25zQnV0dG9uOiB7XG4gICAgcGFkZGluZzogXCIwcHhcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgIGNvbG9yOiBcImJsYWNrXCJcbiAgfSxcbiAgbm90aWZpY2F0aW9uSW1hZ2VQcmV2aWV3Q29udGFpbmVyOiB7XG4gICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbkltYWdlUHJldmlldzoge1xuICAgIGZsb2F0OiBcInJpZ2h0XCIsXG4gICAgaGVpZ2h0OiBcIjYwcHhcIixcbiAgICB3aWR0aDogXCI2MHB4XCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgbWFyZ2luVG9wOiBcIjEwcHhcIlxuICB9LFxuICBub3RpZmljYXRpb25JbWFnZToge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMjUwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMHB4IDBweCAyMHB4IDIwcHhcIixcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIlxuICB9LFxuICBjbG9zZUljb246IHtcbiAgICBoZWlnaHQ6IFwiMzVweFwiLFxuICAgIHdpZHRoOiBcIjM1cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICBtYXJnaW46IFwiNXB4IDE1cHhcIlxuICB9LFxuICBtb3JlSWNvbjoge1xuICAgIGNvbG9yOiBcImdyYXlcIlxuICB9LFxuICBjbGlja2FibGVOb3RpZmljYXRpb246IHtcbiAgICBwYWRkaW5nOiBcIjBweFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidW5zZXRcIixcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRBcHBsZVN0eWxlcztcbiJdfQ==