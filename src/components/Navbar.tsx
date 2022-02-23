// @ts-nocheck
import React from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand='sm' className='mb-4'>
      <Row style={{width: '100%'}}>
        <Col>
        <img
          alt='logo'
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAAbFBMVEVHcExDQ0NERERDQ0M6OjpERERDQ0M8PDxGRkZEREQ8PDxERERERERBQUFERERERERDQ0NERERERERERERERERCQkJDQ0NERERERERERERERERDQ0NERERCQkJGRkZHR0c7Ozs6OjpERERDQ0PLq9yuAAAAHnRSTlMA++QMIfMHGzwDMVhOdGph7JrZgNArRMaojrMUvDdoRYhSAAAJvklEQVR4XuTRyw2DMBRE0XlJbPIXOAGwYDX03yMtIA2bEaeDq4s9ci000i53HOP6Z9BMfKHDLdHR9NCft/T0g6qjqWjU6UFXFZo3bRVoPnS1ptOmM6B5+V4v0MxBVx1EE131EDXJdrpsCDoaM3TPC+2sNW9ioAbgFJNgkhtCgFWEl4UBA4yCUTAKRsEoGAWjQJp96AJOBkoAJ5Pc0AV8DJQAADl3tJwqDIQBmGADjQigICrSdmbz/u94hilOLo7ZP+lSZzrZ25TCz9fEBGJb+sOVSyazRU5/uGybJDpmx+iJsldEibIXHVGi7JX989G7XaLoRLZKrae7AuwAPTl2cyBY9tr0OdN86uuB64h9e7X+g+v6wp58ansdwF7Eo2ucfJ+ZzNy8zY1ZZkXK135bLursO7hebj/T59R+ucjbb7AHoI/ZUsZ3j67u9Q3DMT5vnb8P7r2JDt8nPxEqXWyPnq+LwsZzynWA2XsOr7+bd89b39F8cv3tZ8x+kKCzV5d9+NDZbHa/tj/v7Xe0ijBZKPtXHLtRAejsbhtVgM/IR/TnrU22li9aubbvN2Y3Yzh6YVn0bPZYPKJ/8btBRu8wuBZm/zQx2S1G5xe2ymR8Z/x8RP8EVIMn+07ALhzeJehY3fWnN8Q+EKxN0U8IHZjA6LZGN69Y299j2OXo9oFuEDqOjqZhO/VCdhWO3iD0H0enG9jTYg1ij5/SVRF/QQB9EkRX92wt/fwiesQev5FME6qBRyeHLojubmAP/ozHrR7XtBHoCqCLottzKPuFUOmg6F04es13wj2JotMMxl0lYJeia37b1iSMbt8BRwR792J0YXQa3JxQzN7A5M126LM4uq3ATP22JXsejt6jybU4unuHcAejVxS7HL3jIea46GDxOonZ85ehn2mL6PrOP/HQJoJdiE4CdBCdHcRND9gHzC5EPwH0O0CPja7KDdlfg36JjI6ns62c/SXob7RVdPvGPyTWEQu4RoI+CtBBdDiujnL2F6CXFB0dr2JMzrN/BLDL0Q1AHzaMTh2YGd/AlA+zG4yeA/Rybb5bQXRmFTP/Env7O+g4Oi6wiukj2I0A3b9kUww6eA4PquW/V60Lrkdg9jbihUsn6HNAnV8Hl4pnD+ArfrJHrhOgy9TtjR9k9C6cvf0fHV9vzf8jg5lBB68bYdnVyqDergPY49GpdOjc6UsbFOZjDRP207ObybPsXTx7Rbgqh85NtgcKqt6Xhf3cfAMLvPjdNW7gwn2959ZYuLs5qKgdyCf+5Lp083jIHo1O6mrYax3KJbmmwJqW7Ie4r+c2ytd8uS/JddReOoeOq5uOAwc5H2dFwaWn44XCqzvyJ5+Og4rfS1dRAvWUvdCUQD1lP1BipYvk0B27Q0+UvVCUXNlDkuhuR6NRlGIt7COlWcYtGtNjP/xjBw4IAABAEAC5pP6/7EfCtsofAMDUyrF3Bs0JwkAUfhiJbqsaAUSh9JD9//+xNzO2BWHfgQO++zdfsuLoTMJuXG3eW19Z3ltfY95bX22woXCOjmFBOqKlcI6O1YJ0xJ3COTouWnfykPXM2csF6Yiawj/ignjPyQEK59qybZaVc3b5ZOhySfkZqAi8gjD2DoGgAyd33GnjJ2f3OBJ0yckFcFzlGjtdUHLtKHkDQIIZDwL0aqW1ByQ307kAvb1we1BHrQcwi4+e6ll6ouS5p25VZJ66eHYHmCfeJbm96eSJqDvg1P5dBXA30ncwlft2SIs3rx0lNXOsi7ZQci2ZJsHpVQqXW/CsowZoHRl5ukMOqebTqaMA9tSFRR8MePCUfI9Hdjof31JDDht50L3ld5GR6wUpONsed/NTl3XMzDgtKXlwSIG/KDMLtJ4p1ytSIF8z8YaRq9Z4irSz8Fae8V6ZVs6uiHOycZR8j1+Rxlz2uX8J9UgNgw0dJb/iT6SYTBfC9NZOO09xG9NnnuRkN+GbTqNv/9J1xsilmFx2Qq5ZTc0/OA/Qvpgiz4fkF51UdkpeeAxlG/QVHbbMEGNtZJA+5K/rdiDkml0wluO4Py9H6V2l43W7jtHSvlh6K+Pycbza/bB3h02NwkAYgAMSaaRCSwtpS8Fz8///403nbiZXXzQQOZsJu5/diY87rRDCrnDEPjGT/2wYfW0+h5+F+jq7OX6eTcfGf3FDdT9xxr4ZS542D7HV0oytnR6mZGej2WSkzrwXNyT1VkyMbJ/SfaSnTEyOSn9YeqhPzeTsUu/I3GVLXXovTmR0JeZEbuBmxaf7cCLT+rqv5k4l6A8Xne7km9ylx8uhF/MXt2FoVjJ2V5lJH/4uKx4RdBfDr7n04T5/Ft12YXgI/cOv/v6Qqg8BVJ1WXPXH0IeV0pnOdKYznelMZzrTmV6M3ulu8/jpJe06AVGQzCOnq5KI0g7lRDKLjY5ytBdEYI+Djh1t0xzkYI+LXuIDNiu/2fPY6Cin85icTipS+uvdyQ+UGyuPhI5ycshDoDfVa9UrN92/5hXIg6AXNd0iLdUC9APUHOWh0NX+rk8m0D3kWPME5CHQz2TjooC+hLwEeRD0Dmdk+NMPiUN+USIceg3d14G+qDwgOsGPAX1JecD0HujLfc6vSoRMb4H+zf/nIA+W3gB9KblWImg6dUBf6BpOh7c3V0E3b6B7ywuQh0LHQe1J7kcv3fKg6DgxOdkIL3qTfCbHb7i+C4AOh5p3me/tS59MlbeUduHQRWPPenvSxUZ+Ib/8KyewB0CnOXS0T5UTpXlo9OE7dLWRU+U3exRVt67zqPyEcqK0i6HqGG45XZ+ipLvl5vos4qRXTvmTiIDuKY+J7tqH24I8ErpbnsDnPCo67kahnDTIo6C75QbkEdA95NFczeEOJMqPII+k6pVTroSIq+oo12JMXlt5DPfrrh3IFgYYxlf1wiE3qQiPbgfmJj3SZ8tpXF6LAOk52dh60XEfDuUqQLqCt+H8dmRRnsN3e0B07AF18qv6Nhl7lrqRII/iwRPardza4RouXPrwAvTpdiu3dpAHS39rPelqm4ydk2klyCM8WlDc5Gi/gDxQOmUregFEw7jsNdCxOaPZrIkuSms3Z7EquirNH7wx5+e46Rgv+u0WdatW+J5b3rd9pvgVP6YznelMZzrTmc50pjOd6UxnOtOZznSmM53pTGc605nOdKb/rybpFHST9Pir/s5V/9kxGGZp1fJjMJ6z/nd5d5CCQAxEQbR0GOhWjQpqIMHNn/vf0Y0QsnQ1wH83qBNUzC6aneMv+ok9aLbF7PPqI7wc5KWeAKAf5afkmIW6KUCTp07KVOUqVzzlilWuqHLFTa5ImWrwkKVtgbxblr/H2NaxHDJWeWkL8AVQR51UwFdpJQAAAABJRU5ErkJggg=="
          style={{
            width: "50px",
            margin: "2px",
            backgroundColor: "white",
            padding: "4px",
            borderRadius: "10px",
          }}
          />
          <h3 
            id="header-title" 
            className="text-white"
            style={{
              display: "inline-block",
              verticalAlign: "bottom",
              paddingLeft: "4px",
            }}
            >Bienvenue chez Anais</h3>
        </Col>
        <Col style={{textAlign: 'right'}}>
          <h6 className="text-white" style={{display: 'inline-block', verticalAlign: "-100%"}}>Number of Articles</h6>
        </Col>
      </Row>
  </Navbar>
  );
}

export default CustomNavbar;
