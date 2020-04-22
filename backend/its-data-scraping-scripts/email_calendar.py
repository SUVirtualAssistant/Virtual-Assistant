import sys
import requests
from bs4 import BeautifulSoup

cal_email_url = "https://www.seattleu.edu/its/collab/email/"
seattleu_url = "www.seattleu.edu"
cal_email_page = requests.get(cal_email_url)

if cal_email_page.status_code == 200:
    print("200 Successfully requested: Calendar/Email page")
    cal_email_soup = BeautifulSoup(cal_email_page.content, 'html.parser')
    cal_email_content = cal_email_soup.find_all('div', class_='primaryContent standardContent')

    # Scrape <p>
    p_list = []
    cal_email_p = cal_email_content[0].find_all('p')
    for each in range(0, len(cal_email_p)):
        clean = cal_email_p[each].get_text().replace("\xa0", " ")
        p_list.append(clean)
    for p in p_list:
        if "seattle university provides" in p.lower():
            about_cal_email = p
        elif "access your @seattleu.edu email" in p.lower():
            general_email_access = p
        elif "smartphone" in p.lower():
            smartphone_email_access = p
        elif "outlook app" in p.lower():
            navigate_outlook_app = p
        elif "access your calendar" in p.lower():
            calendar_access = p
        elif "reset" in p.lower() and "password" in p.lower():
            reset_password = p

    # Scrape links
    links = []
    for each in cal_email_soup.find_all('a', href=True):
        if each['href'][0] == '/':
            l = seattleu_url + each['href']
            if l not in links:
                links.append(l)
        elif each['href'][0] == 'w' or each['href'][0] == 'h':
            if each['href'] not in links:
                links.append(each['href'])
        else:
            continue

    for link in links:
        if "cheatsheet" in link.lower():
            if "ios" in link.lower():
                navigate_outlook_app = navigate_outlook_app + " Download cheat sheet for iOS: " + link + "."
                iOS_outlook_cheatsheet_link = link
            if "android" in link.lower():
                navigate_outlook_app = navigate_outlook_app + " Download cheat sheet for Android: " + link + "."
                android_outlook_cheatsheet_link = link
        elif "reset" in link and "password" in link and "su" in link:
            reset_password = reset_password + " Article can be found here: " + link + "."
            reset_su_password_link = link
        else:
            continue

    # Extra (SA = support article)
    for link in links:
        if "email" in link.lower() and "settings" in link.lower():
            mobile_email_setting_SA = link
        elif "listserv" in link.lower() and "manage" in link.lower():
            manage_listserv_SA = link
        elif "archive" in link.lower() and "email" in link.lower() and "pc" in link.lower():
            archive_emails_pc_SA = link
        elif "365" in link and "log" in link.lower() and "online" in link.lower():
            log_in_365_online_SA = link
        elif "calendar" in link.lower() and "outlook" in link.lower() and "app" in link.lower():
            microsoft_calendar_SA = link
        else:
            continue

    ''' TEST '''

    print(" ---- TESTING VARIABLES/ANSWERS ----")
    print(about_cal_email)
    print(general_email_access)
    print(smartphone_email_access)
    print(navigate_outlook_app)
    print(calendar_access)
    print(reset_password)


    print(" ---- TESTING LINKS ----")
    print(iOS_outlook_cheatsheet_link)
    print(android_outlook_cheatsheet_link)
    print(reset_su_password_link)
    print(mobile_email_setting_SA)
    print(manage_listserv_SA)
    print(archive_emails_pc_SA)
    print(log_in_365_online_SA)
    print(microsoft_calendar_SA)

else:
    print("Error requesting Calendar_Email page. Exiting.")
    sys.exit(0)
