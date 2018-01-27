import cv2
import os

FRAME_FREQ = 300
END_LEN = 10000

MOVIE_POS = '/Users/mackopes/Desktop/How To Train Your Dragon (2010) [1080p]/How.To.Train.Your.Dragon.2010.1080p.BrRip.x264.YIFY.mp4'
OUTPUT = '/Users/mackopes/Desktop/HTTYD/pics'


class MovieProcesser:

    def video_to_frames(self, video_loc, output_loc):
        cap = cv2.VideoCapture(video_loc)

        try:
            if not os.path.exists(output_loc):
                os.makedirs(output_loc)
        except OSError:
            print ('Error: Creating directory of data')

        currentFrame = 0
        while (True):
            ret, frame = cap.read()

            # Saves image of the current frame in jpg file
            name = output_loc + str(currentFrame) + '.jpg'

            if currentFrame % FRAME_FREQ == 0:
                print ('Creating...' + name)
                cv2.imwrite(name, frame)

            currentFrame += 1

            if currentFrame >= int(cap.get(cv2.CAP_PROP_FRAME_COUNT))-END_LEN:
                break


        # When everything done, release the capture
        cap.release()
        cv2.destroyAllWindows()
