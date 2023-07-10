import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Navbar from '../Navbar';

export default function MoreAbout() {
    return (
        <Box>

            <Navbar />

            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography sx={{fontSize: '27px', mt: '30px'}}>Here's some more about me!</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: '40px', mt: '30px'}}>

                <Box sx={{backgroundColor: '#003049', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '800px', borderRadius: '10px', boxShadow: '0px 3px 5px rgba(0.5, 0.5, 0.7, 0.7)'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold', mt: '15px'}}>Work</Typography>
                    
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '15px', mt: '20px'}}>
                        <img src="https://www.isc.co.uk/media/3364/isi_logo_purple_2.jpg?anchor=center&mode=crop&width=465&height=290&bgcolor=373737" alt="independent schools inspectorate logo" style={{width: '140px', height: '70px', mt: '20px', borderRadius: '10px'}}/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Fscs_logo.jpg" alt="financial services compensation scheme logo" style={{width: '140px', height: '70px', mt: '20px', borderRadius: '10px'}}/>
                        <img src="https://www.ci-portal.de/wp-content/uploads/AIG_logo.jpg" alt="aig logo" style={{width: '140px', height: '70px', mt: '20px', borderRadius: '10px'}}/>
                        <img src="https://www.peace-foundation.org.uk/wp-content/uploads/2018/08/rbs-logo-for-web_Standard-1.jpg" alt="rbs logo" style={{width: '140px', height: '70px', mt: '20px', borderRadius: '10px'}}/>
                    </Box>
                    <Typography sx={{fontSize: '13px'}}>Some of the major organisations I've worked at</Typography>
                    <Typography sx={{fontSize: '16px', width: '700px', textAlign: 'center', mt: '20px'}}>While I've never had a job in development, I think that the experience I've gained in my professional career will be of benefit - both to me and a future employer.</Typography>
                    <Typography sx={{fontSize: '16px', width: '700px', textAlign: 'center', mt: '20px'}}>Before joining the School of Code, I spent the last four and a half years working for the Independent Schools Inspectorate. As an Account Officer, I was responsible for the core aim of the organisation - organising and managing inspections for 1,400 Independent Schools Association schools. As a member of the small but dedicated Delivery Team, I was responsible for managing these inspections from end to end. That meant everything from choosing and inviting the initial team, liaising with them to provide inspection documentation and answer logistical questions, booking accomodation, notifying and liaising with the school, and progressing and proofreading inspection reports. </Typography>
                    <Typography sx={{fontSize: '16px', width: '700px', textAlign: 'center', mt: '20px'}}>While my team and I worked in close cohesion to ensure a thorough inspection cycle for routine inspections, as the most senior member of the team I had individual responsibility for short visits. These were one-day, ad hoc inspections outside of the usual timeframe that were either organised due to reported concerns outside of the inspection schedule, or to check the progress of school action plan implementation. </Typography>
                    <Typography sx={{fontSize: '16px', width: '700px', textAlign: 'center', mt: '20px'}}>I am proud of the reputation I developed for fast, efficient inspection management, both among inspectors and school headteachers. I had to be a strong communicator and be able to pre-empt problems on my side long before an inspection took place. </Typography>
                    <Typography sx={{fontSize: '16px', width: '700px', textAlign: 'center', mt: '20px', mb: '20px'}}>I'm eager to talk more about ISI and my other roles, but the UI designer in me says that this wall of text shouldn't be too much bigger! So please see my CV via the navbar for more.</Typography>
                </Box>
            
                <Box sx={{backgroundColor: '#003049', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '800px', borderRadius: '10px', boxShadow: '0px 3px 5px rgba(0.5, 0.5, 0.7, 0.7)'}}>
                <Typography sx={{fontSize: '20px', fontWeight: 'bold', mt: '15px'}}>Everything else</Typography>

                <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px', mt: '25px'}}>
                    <img style={{width: '320px', height: '160px', mt: '20px', borderRadius: '10px'}} src="https://lh3.googleusercontent.com/pw/AIL4fc_K9epLdySjE2iHA4qRuXMpc6kKqj9BqLtjRuvX5il_OeCcAMOo5m-zAXuv-fQdpBvKY1V2Ri-Q5Z8qQ8XA-xjE3AP-bevPDJrqvlQOwkgyvtzxRrMUWUj_gWOUP0uPcw1wcjFx8t2Y94esg6lXJlsNo8HyriqQtKFsD7H_rJUnoJz11PdY0Xs6dzyZDJX3TvjwyZFe1EHWqu1yppuOzfXl-ouYLDB6smSu4prDtFpqZ5PJdm47M6GJ0qt_HUjbvJUsmvdBwidnQ2BHXMnsCIEI1EWGFLgR-rwjezxgDgNsBicfiu2rMv2_g9r-0TVC8CmUZV_UPhvn4Em2Jvn-yxvi92jb5w9PFi6TMwuIkyTacjv2bnn4srCIxJygs4Ibz7n9mjH_wNrqnGBOvf0u3K3Ha8rCYA14mJwX21vXkZemk4y65dKHADtBjx52mSKsnd0wWhv8pL-BCHRxf75e8gz8urt6qQzh4TWgzsOWtHTYNevUB0qo2KsWA5Oktz3a00bubBP0gI0Y-09eMifmfh0U5EUjvbsC8R4lFIFrWRViG68nr0Z56EEW8-lQbI4rONTgsaGqquK3J344EA1RfxwVZd_UwZJ7LKy5E5TlLORnBtwmbCTTf7hY0ChkAbQY8PNGDxWvwyAtU2EoOHd3HUdB0LTgtSfdVZ3seygfSj-1Y1J4Y14SqIW3tUK9l0vnperldarMhcNpijzcAo2u5KZ5Spbs4m66MLr8__82FB5XQLGNNayB8tAor9FVsa3k6_rzbANJTNzr-BErM1yNrQ3SWk2Ojhn_iAgQGv6lwNO-6G6CWM4Xkz9gF9U68WemIr72dWZHEPN3PCnelPB2B9oHq0SdPE0OpTRF3XGTQZxUi7NiOAeuc_l2Qr9bSUhf8DqQcxwmKJJxVE1K_me8fHSqCEV4rDoC6WZrKgb5pa6Ayn4M__ZTyrWFl5w0SAQ=w1024-h768-s-no?authuser=0" alt="USA picutre"></img>
                    <img style={{width: '320px', height: '160px', mt: '20px', borderRadius: '10px'}} src="https://lh3.googleusercontent.com/pw/AIL4fc_uYB1kPHDZjRCg75q_4fZrOoDYT_mX1L_FYml8cGWYO7txAPw-qlfqixeC7db_XPWbAX-M76KEaIm9IHjhg814JD66RyYvHEHlWkTB72KxPtzXqHCnChihkvBtxSVKQuhfUrLKMEK_lLo711SKRyzP5rXuN3yN-pX9-3cLdNJas5TPwcZr6msSGZ4x33fk_ii8s5Wzz6cQ2r_4TxNPx8NFszC2EmWrwB02F7fEpb-VHZsjiZnjd6aGzoO2Aw9ZX9vnKKMcHdTdG8o4Pse1QQG3IIgeyCPej_KzNEMMR68uGvVOo6PrCdlX4O-ln-zzeoDCX6KIHZgGgFSD0qX0q7UgAODlbm9fdqjECJausDjDKOzPBRcpjC-A5TpFVr2RGVBsEI3CEkecNa1vnuL5FksjJQHA7eQ16tDOgZy-jwJyp70hUaLctFBVbzLGVm7ceBgrMlPRlqvSyKsFMolsD43J8c805wlIIvbTEzl9msngktxo8U85cvHy1FVjKVvw6hSmVvQvoGkqPnmcCnOT8HxS5pF8MoHXYub09AW6wA0C4UDYTBiKG6_1V4r9AWVee-7UzT-vHWF1Xn_ECKea_rHk_HslOkBeJuTpesJ_0FTloOeWP_Ee_Ole8MDswq5BoJBqh0S5ERbK2eXut4sXqW6KELW2TFT1Psi65xVWddvMpLEHoV6xd8SE9SKmXt8H0uowyLswHGshR__4OzxCkSRUg4TvSLlypv_4f4WORLDFlyRX8yk_Vty4PNBHeYPMu5YyTmIaS6kn6agc5UNbIfuoRLytkW8LHx3GsN1QMmKyV_rD3ohw7TXk9okrUVLgL-lfDPXwy8O2Miw_q_lObcoF6dZQBsteDjbDalk9S-AMeYlSp1ECDibI4QTTHfcnngqRi-Kgo-CvhOO18VtAqP08Z5L3hVM6XV5-BXa3jhvpg-mqpJlyJMDmqfC6neg=w1024-h768-s-no?authuser=0" alt="Bryce Canyon"></img>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px', mt: '8px'}}>
                    <img style={{width: '320px', height: '160px', mt: '20px', borderRadius: '10px'}} src="https://lh3.googleusercontent.com/pw/AIL4fc_QrZf21CmeiTOGa_jWXALW4WRnIIhZa0NYpjU4BOWGq4iQor-gfoJVKB2uVQne44DLQaAPIvATKoJ9e8zsl3TqV3nK2jcgWWvFezVvO7Zeix5xiNPsR_ncdI9Pag6StkNU7R5g8CLNx4fzjHN0-0AtyPB0LoumvRpZ008Alik4eX7dxIChiYIVqsXZpaVych-mixJcL01i5G2IFjZDyK5we8oCiXgdfNxx6k51WVmjwhIEwcKBjNUJ-CNL7HmMiyPFipVaxWdCJPkCHa-rg9Ra0WLbUbC3X8sd57nYQ10rQEjl3Jkidm1-5SUBZE-n0BKE--4F1T6Wpq6YuBs4xLrGXd-fiUWRj3jptU6a-bVpVYSH9_9clb98HBV4_dpyK3266Cfir-bSkVVYPkNrAGxx5XuymKHN9CoTzO2otpVwJhqni9bfoiyuebntv4wlYo38Byjy3JLIv4RXNhHYoUB-AkV_Z3Yb81UNJJ_mxa2VYl5Lpi2KHMDIh80FtzN32tFQek9H3robsxryYDo0wwnbJco77uEhDf7Mg5MclpM19-eyPe3ziL9sORA1_YqZXSbvZwIJWPhY3uEhcwWg3KXVXhyiCpepPtMdmEBcQ5k6ETjYwdjG0wcI1_-5y0nWZrshykNeDw3hfYjOLoYNUPsUN0idqynNUNPvg_QcfYmQQgaEkytoLhgGd0ZZ5fvXeA3AmR97HiuNEKh3qSjV6Nv3qdio42bY1Yv3bX18vLl5Dg3D1_yFnYpmBvL-k6nxtgEvuBdC51avstB-H63p7lTlnutMJfVi6o9DevzGudYeTUmIc-Tq9cve1b9Yxe4HYu_P7O4aBga6CXs10DoBVW_Qut6Xzm7Feppwuy5jfgP60aydfl3Z_Lzkd1ugGuZB8mWV2X-TaGw5mT_6OetsY7vjamVuvWWT20o55Ceo2ydqydI5WYG2ferPWYDEsWM=w1409-h1057-s-no?authuser=0" alt="Scotland"></img>
                    <img style={{width: '320px', height: '160px', mt: '20px', borderRadius: '10px'}} src="https://lh3.googleusercontent.com/pw/AIL4fc9T3DVCBeGhZG65b8vvx0yi9YxG1E-ELAbvWJE9EzIDkCPHi1SXOVF4FeiZqLKiAO0dw2Ta1D0ywnp5UWM8mymEKNK--Wv_cjYy8Wdfws1LCqOXlfT0AzR7xNQwYElhylUf7iw7bc690mdTH7eZhx_e9n32aMDW9wGoyyeSfZyck2vACIiU9Sy7uBK2uyKXuA4_zlKLghgk9CWExmpkbsgdwu95w5Cr5wfdhZqtbgz_YDNF4rOPQEAgWe81gqa_C-9zWx676lLqh3MqBXyGnChCjg0zZKtEVURKOHtFaQbOyWq64AjA3Qro1OWE7mq1R_UHcYOJfuiobKC32XG0ZfKzf61qWzXHD8BO8dyGopQxvVXCW7KYuGO3oS4Mnp7ew1OstWVzzc2spiHeT6D-sDv8giWgy63LgYjszEZDOUBiA2T6VGCWcLdpyGWmsaBqO-6pgMjittde-c2CIwF9GA5qI55IHPm_LguYhAmxOPib6b1GoicId-zeuy1oJMdm346LxO--H0V4P2ax7aepSK9U9LEisH_WkQXkHXVoTBlKSscWLWvYFzK-0pFf5YT31kwrrn2qJwpU8DUsqwf-SV1fsGB2YpXfsbw66L6M91NeLO1XkHKPyFC8l3j0AoNPUWwfnrwXSexTW-CJwOfYwtLcsOb9EYFkcSR3L48ldHw5CnfeajbupYmhgmIW0h438t3Tdx2Irjlp5Bju9CWfy8ljtvyfZU86Vqml8vQZ8QfesDKkAsidmeQPU2xBQtO22qSwcKWxHH4dJkkf7r0lwHSRBWt8v6hurOJ5HidD2KgdAoRjor4xJh1UrtGhy8oazXzyrhUl0AthYnQiPPFknkT3SXnbJAbBNhZOk0og-yj2DOTW8jwz0BOj-av6qFsZbBcoyiqBu8IAkptz8son86ouDfXIxiE-pbuxq7VVh4dBoRXFBsGOoN3uB9n8tQ=w1560-h878-s-no?authuser=0" alt="Food"></img>
                </Box>
                <Typography sx={{fontSize: '16px', width: '700px', textAlign: 'center', mt: '20px'}}>I always find something to enjoy about my work, but my interests don't end there!</Typography>
                <Typography sx={{fontSize: '16px', width: '700px', textAlign: 'center', mt: '20px'}}>Coding has been a genuine passion of mine since I learned Javascript, and even before, when I was doing some absolute beginner coding on Python. Even after a day of learning and coding during my School of Code bootcamp, I'd often find myself coding for fun in the evening.</Typography>
                <Typography sx={{fontSize: '16px', width: '700px', textAlign: 'center', mt: '20px'}}>I love both gaming and being creative, and one of the ways I first got into coding was by trying to write simple text adventure games using Python. With a bit more development knowledge, I'm excited to start working on a couple of these ideas in React. </Typography>
                <Typography sx={{fontSize: '16px', width: '700px', textAlign: 'center', mt: '20px', mb: '35px'}}>Away from the computer, I really like to travel, and I've developed a real love of walking holidays. My hiking boots have been as close as the South Downs and as far as the Rocky Mountains. I'm not a mountain climber or an off-the-grid adventurer, though - I just enjoy a nice walk! </Typography>



                </Box>
            </Box>

        </Box>
    )
}