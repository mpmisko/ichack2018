import srt

NOUNSPATH = "nouns.txt"

def analyse_keywords(subtitles_path, max_elem = 10):
    f = open(subtitles_path, "r")
    subtitle_generator = srt.parse(f.read())
    subtitles = list(subtitle_generator)
    subtitles = list(map(lambda x: x.content, subtitles))
    for sub in subtitles:
        if sub.startswith("- "):
            sub = sub[2:]
        if sub.startswith("<i>"):
            sub = sub[3:]
        if sub.endswith("</i>"):
            sub = sub[:-4]
        #print(sub)


    occurences = {}    
    nouns = load_nouns()
    for sub in subtitles:
        for word in sub.split():
            if word in nouns:
                print(nouns[word])
                if nouns[word] in occurences:
                    occurences[nouns[word]] = occurences[nouns[word]] + 1
                else:
                    occurences[nouns[word]] = 1

    occurences_list = [(k, v) for k, v in occurences.items()]
    occurences_list = sorted(occurences_list, key=lambda tup: tup[1], reverse = True)

    return occurences_list[:max_elem]

def load_nouns():
    f = open(NOUNSPATH, "r")
    s = {}
    for word in f.read().split():
        if word.endswith("?") or word.endswith(".") or word.endswith(",") or word.endswith(":") or word.endswith("!"):
            word = word[:-1]
        s[word] = word
        if word.endswith("y"):
            s[word[:-1] + "ies"] = word
        elif word.endswith("s") or word.endswith("c") or word.endswith("ch") or word.endswith("sh"):
            s[word + "es"] = word
        else:
            s[word + "s"] = word
    return s
