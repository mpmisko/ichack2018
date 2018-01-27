import glob
import numpy as np
import imageio

def avg_clr_process(path_to_pics_folder):
    all_pics_clrs = np.array([]).reshape(0, 3)
    for image_path in glob.glob(path_to_pics_folder + "*.jpg"):
        img = imageio.imread(image_path)
        all_pics_clrs = np.concatenate((all_pics_clrs, [get_avg_clr(img)]), axis = 0)
    for image_path in glob.glob(path_to_pics_folder + "*.png"):
        img = imageio.imread(image_path)
        all_pics_clrs = np.concatenate((all_pics_clrs, [get_avg_clr(img)]), axis = 0)
    mean = np.mean(all_pics_clrs, axis = 0)
    return ("#" + ( ("00" + (hex(int(mean[0])))[2:])[-2:] + ("00" + (hex(int(mean[1]))[2:]))[-2:] + ("00" + (hex(int(mean[1]))[2:]))[-2:]).upper())

def get_avg_clr(pic_np):
    return np.mean(np.mean(pic_np, axis = 1), axis = 0)