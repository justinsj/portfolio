import os
from pdf2image import convert_from_path

infolder = 'inputs'
outfolder = 'outputs'


for filename in os.listdir(infolder):
    input_path = os.path.join(infolder, filename)
    pages = convert_from_path(input_path, 72, poppler_path='./poppler-0.68.0/bin')
    output_path = os.path.join(outfolder, '.'.join(filename.split('.')[:-1]) + '.png')
    pages[0].save(output_path, 'PNG')
