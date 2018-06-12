from django.contrib.auth import get_user_model
from rest_framework import decorators
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from ..serializers import (
    UserChangePasswordSerializer,
    UserRegisterSerializer,
    UserSerializer
)

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):

    def get_queryset(self):
        queryset = User.objects.all()
        if self.action == 'referrals':
            queryset = queryset.filter(referrer=self.request.user)
        return queryset

    def get_serializer_class(self):
        if self.action == 'register':
            return UserRegisterSerializer
        if self.action == 'change_password':
            return UserChangePasswordSerializer
        return UserSerializer

    @decorators.list_route(methods=['get', ])
    def referrals(self, request, *args, **kwargs):
        return super(UserViewSet, self).list(request, *args, **kwargs)

    @decorators.list_route(methods=['get', ])
    def me(self, request, *args, **kwargs):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @decorators.list_route(methods=['post', ], permission_classes=[AllowAny, ])
    def register(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        user_serializer = UserSerializer(user, context=self.get_serializer_context())
        return Response(user_serializer.data, status=status.HTTP_201_CREATED)

    @decorators.list_route(methods=['post', ], url_path='change-password')
    def change_password(self, request, *args, **kwargs):
        serializer = self.get_serializer(request.user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'Password changed'}, status=status.HTTP_200_OK)
