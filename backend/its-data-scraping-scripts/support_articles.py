import sys
import requests
from bs4 import BeautifulSoup

SA_url = "https://www.seattleu.edu/its/support/support-articles/"
seattleu_url = "www.seattleu.edu"
SA_page = requests.get(SA_url)

if SA_page.status_code == 200:
    print("200 Successfully requested: Support Articles page")
    SA_soup = BeautifulSoup(SA_page.content, 'html.parser')
    # SA_content = SA_soup.find_all('div', class_='organizer standardContent')
    SA_content = SA_soup.find_all('div', class_='knowledgeBaseItem standardContent')

    # Scrape all links
    links = []
    for each in SA_soup.find_all('a', href=True):
        if each['href'][0] == '/':
            l = seattleu_url + each['href']
            if l not in links:
                links.append(l)
        elif each['href'][0] == 'w' or each['href'][0] == 'h':
            if each['href'] not in links:
                links.append(each['href'])
        else:
            continue

    # Scrape all titles, summaries, and links for each supporting article
    SA_list = []
    summary_div_list = []
    summary_ps = []
    date_stamp_div_list = []

    support_articles_titles = []
    support_articles_summaries = []
    support_articles_links = []
    support_articles_date_stamps = []

    for each in SA_content:
        SA_list.append(each)

    for each in SA_content:
        # TITLES
        h4s = each.find_all('h4')
        support_articles_titles.append(h4s[0].get_text())
        # LINKS
        for link in h4s[0].find_all('a', href=True):
            if link['href'][0] == '/':
                l = seattleu_url + link['href']
                if l not in support_articles_links:
                    support_articles_links.append(l)
            elif link['href'][0] == 'w' or link['href'][0] == 'h':
                if link['href'] not in support_articles_links:
                    support_articles_links.append(link['href'])
            else:
                continue

        summary_div = each.find_all('div', class_='summary')
        summary_div_list.append(summary_div)

        date_stamp_div = each.find_all('div', class_='lastModified')
        date_stamp_div_list.append(date_stamp_div)

    # SUMMARIES
    for each in summary_div_list:
        summary_ps.append((each[0].find_all('p')))

    for each in summary_ps:
        if each:
            support_articles_summaries.append(each[0].get_text())
        else:
            support_articles_summaries.append("There is no summary for this article.")

    # DATE STAMP
    for each in date_stamp_div_list:
        support_articles_date_stamps.append(each[0].get_text())

    # Complete Support Article (Title, summary, link, date stamp)
    support_articles = []
    for sa in range(0, len(support_articles_titles)):
        support_articles.append(
            support_articles_titles[sa]
            + "\n"
            + support_articles_summaries[sa]
            + "\n"
            + support_articles_links[sa]
            + "\n"
            + support_articles_date_stamps[sa]
            + "\n"
        )

    ''' TEST '''
    for support_article in support_articles:
        print(support_article)
    '''      '''

else:
    print("Error requesting Support Articles page. Exiting.")
    sys.exit(0)
