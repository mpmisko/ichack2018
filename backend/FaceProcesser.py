import face_recognition
import os

class FaceProcesser:
    def filter_faces(self, path):
        try:
            if not os.path.exists(path + 'faces/'):
                os.makedirs(path)
        except OSError:
            print ('Error: Creating directory of data')

        for filename in os.listdir(path):
            if self._is_face(path + filename):
                os.write(path + filename, path + 'faces/')

    def _faces(self, path):
        image = face_recognition.load_image_file(path)
        return face_recognition.face_locations(image)

    def _is_face(self, path):
        return len(self.faces(path)) != 0

detector = FaceProcesser()
print(detector.faces('/Users/michal/Desktop/pics/doctor_strange/36900.jpg'))
print(detector.is_face('/Users/michal/Desktop/pics/doctor_strange/36900.jpg'))
