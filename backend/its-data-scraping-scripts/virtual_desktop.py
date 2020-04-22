import sys
import requests
from bs4 import BeautifulSoup

VD_url = "https://www.seattleu.edu/its/collab/virtual-desktop/"
virtual_desktop_web = "https://desktop.seattleu.edu/"
seattleu_url = "www.seattleu.edu"

VD_page = requests.get(VD_url)

VD_soup = BeautifulSoup(VD_page.content, 'html.parser')
v_d_content = VD_soup.find_all('div', class_='primaryContent standardContent')


if VD_page.status_code == 200:
    print("200 Successfully requested: Virtual Desktop page")

    links = []
    li_text = []

    li = v_d_content[0].find_all('li')
    for each in li:
        # li_text.append(each.get_text())
        link = each.find_all('a', href=True)
        if link:
            if link[0]['href'][0] == "/":
                l = seattleu_url + link[0]['href']
                if l not in links:
                    links.append(l)
            elif link[0]['href'][0] == 'w' or link[0]['href'][0] == 'h':
                if link[0]['href'] not in links:
                    links.append(link[0]['href'])

    for each in links:
        if "desktop" in each.lower() and "software" in each.lower():
            vd_software = "Full lists of software available through the Virtual Desktop: " + each
        elif "desktop" in each.lower() and "download" in each.lower() and "pc" in each.lower():
            vd_access_pc = "For downloading the SU Virtual Desktop on a PC check out: " + each
        elif "desktop" in each.lower() and "download" in each.lower() and "mac" in each.lower():
            vd_access_mac = "For downloading the SU Virtual Desktop on a Mac check out: " + each
        elif "smartphone" in each.lower():
            vd_access_smartphone = "For Using SU Virtual Desktop with Horizon View for smartphone check out: " + each
        else:
            continue
    vd_access_web = "Virtual Desktop web access: " + virtual_desktop_web

    print(vd_software)
    print(vd_access_pc)
    print(vd_access_mac)
    print(vd_access_smartphone)
    print(vd_access_web)

else:
    print("Error requesting Calendar_Email page. Exiting.")
    sys.exit(0)
