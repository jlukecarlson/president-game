from django.http import HttpResponse
from django.template import Context, loader
from shortcuts import render_response

def home(request):
    return render_response('index.html')
    #return HttpResponse('blabl')
