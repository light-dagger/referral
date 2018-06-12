from rest_framework.decorators import detail_route
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.viewsets import ModelViewSet

from referral_project.tasks.api.v0.serializers import TaskSerializer
from referral_project.tasks.models import Task


class Tasks(ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

    @detail_route(methods=['post'])
    def interact(self, request: Request, pk: int = None) -> Response:
        authenticated_user = request.user
        task = self.get_object()

        task.interact(authenticated_user)

        return Response(status=HTTP_200_OK)
