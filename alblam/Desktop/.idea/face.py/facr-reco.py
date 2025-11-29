import cv2
face_cascade =cv2.CascadeClassifer('haarcascade_frontalface_default.xml/haarcascade_frontalface_default.xml')
webcam = cv2.ViedoCaputure(0)
while True:
    _,img=webcam.read()
    cv2.imshow("face detection",img)
    key =cv2.waitkey(10)
    if ket == 27:
        break
    webcam.release()
    cv2.destroyAllWindows()