import face_recognition
from shutil import copyfile
import os

class FaceProcesser:
    def filter_faces(self, path):
        results = []
        count = 0
        for filename in os.listdir(path):
            if filename.endswith('.jpg'):
                print(path+filename)
                if (self.is_face(path+filename)):
                    print(path+'faces')
                    copyfile(path+filename, path+'faces/'+filename)

        return results


    def faces(self, path):
        image = face_recognition.load_image_file(path)
        return face_recognition.face_locations(image)

    def is_face(self, path):
        return len(self.faces(path)) != 0

