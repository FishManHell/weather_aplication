export const ModalOverlayStyles = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundColor: "#039be5",
        opacity: 0.95,
        zIndex: 1,
    },
}