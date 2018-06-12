from rest_framework.routers import DefaultRouter

from referral_project.tasks.api.v0.views import Tasks

router = DefaultRouter()

router.register(r'tasks', Tasks)

urlpatterns = router.urls
